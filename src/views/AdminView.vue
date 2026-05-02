
<script>
import { supabase } from '../supabase'

export default {
  data() {
    return {
      // 猫一覧
      cats: [],
      // 新規登録用のデータ
      newCat: {
        name: '',
        gender: 'male',
        description: '',
        is_public: false
      },
      // 新規登録用の画像ファイル
      imageFile: null,
      // 編集用のデータ（編集していない時は null）
      editCat: null,
      // 編集用の画像ファイル
      editImageFile: null,
      // 画像を削除するかどうかのフラグ
      deleteImage: false
    }
  },
  mounted() {
    this.fetchCats()
  },
  methods: {
    // 一覧取得
    async fetchCats() {
      const { data, error } = await supabase.from('cat_staff').select('*')
      if (error) {
        console.log(error)
      } else {
        this.cats = data
      }
    },
    // 新規登録時の画像ファイル選択
    onFileChange(e) {
      this.imageFile = e.target.files[0]
    },
    // 画像をSupabase Storageにアップロード
    async uploadImage() {
      if (!this.imageFile) return null

      const fileName = `${Date.now()}_${this.imageFile.name}`
      const { error } = await supabase.storage
        .from('cat-images')
        .upload(fileName, this.imageFile)

      if (error) {
        console.log(error)
        return null
      }

      const { data } = supabase.storage
        .from('cat-images')
        .getPublicUrl(fileName)

      return data.publicUrl
    },
    // 新規登録
    async addCat() {
      const imageUrl = await this.uploadImage()

      const { error } = await supabase.from('cat_staff').insert({
        ...this.newCat,
        image_url: imageUrl
      })

      if (error) {
        console.log(error)
      } else {
        // 登録後にフォームをリセット
        this.newCat = { name: '', gender: 'male', description: '', is_public: false }
        this.imageFile = null
        if (this.$refs.newImageInput) this.$refs.newImageInput.value = ''
        await this.fetchCats()
      }
    },
    // 削除
    async deleteCat(id) {
      const { error } = await supabase.from('cat_staff').delete().eq('id', id)
      if (error) {
        console.log(error)
      } else {
        await this.fetchCats()
      }
    },
    // 編集ボタンを押した時
    startEdit(cat) {
      this.editCat = { ...cat }
      this.deleteImage = false

      // 編集フォームまでスクロール
      setTimeout(() => {
        const editForm = document.querySelector('.form:nth-of-type(2)')
        if (editForm) {
          const headerHeight = document.querySelector('.admin-header').offsetHeight
          const top = editForm.getBoundingClientRect().top + window.scrollY - headerHeight
          window.scrollTo({ top: top, behavior: 'smooth' })
        }
      }, 100)
    },
    // 編集時の画像ファイル選択
    onEditFileChange(e) {
      this.editImageFile = e.target.files[0]
    },
    // 更新する
    async updateCat() {
      let imageUrl = this.deleteImage ? null : this.editCat.image_url

      if (this.editImageFile) {
        const fileName = `${Date.now()}_${this.editImageFile.name}`
        const { error: uploadError } = await supabase.storage
          .from('cat-images')
          .upload(fileName, this.editImageFile)

        if (!uploadError) {
          const { data } = supabase.storage
            .from('cat-images')
            .getPublicUrl(fileName)
          imageUrl = data.publicUrl
        }
      }

      const { error } = await supabase
        .from('cat_staff')
        .update({
          name: this.editCat.name,
          gender: this.editCat.gender,
          description: this.editCat.description,
          is_public: this.editCat.is_public,
          image_url: imageUrl
        })
        .eq('id', this.editCat.id)

      if (error) {
        console.log(error)
      } else {
        this.editCat = null
        this.editImageFile = null
        if (this.$refs.editImageInput) this.$refs.editImageInput.value = ''
        await this.fetchCats()
      }
    },
    // 編集をキャンセル
    cancelEdit() {
      this.editCat = null
    }
  }
}
</script>

<template>
  <h1>管理画面</h1>

  <!-- 新規登録フォーム -->
  <div class="form">
    <h2>新規登録</h2>
    <div>
      <label>名前</label>
      <input type="text" v-model="newCat.name" />
    </div>
    <div>
      <label>性別</label>
      <select v-model="newCat.gender">
        <option value="male">♂ オス</option>
        <option value="female">♀ メス</option>
      </select>
    </div>
    <div>
      <label>性格・特徴</label>
      <input type="text" v-model="newCat.description" />
    </div>
    <div>
      <label>公開</label>
      <input type="checkbox" v-model="newCat.is_public" />
    </div>
    <div>
      <label>画像</label>
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        ref="newImageInput"
      />
    </div>
    <button @click="addCat">登録する</button>
  </div>

  <!-- 編集フォーム -->
  <div class="form" v-if="editCat">
    <h2>編集</h2>
    <div>
      <label>名前</label>
      <input type="text" v-model="editCat.name" />
    </div>
    <div>
      <label>性別</label>
      <select v-model="editCat.gender">
        <option value="male">♂ オス</option>
        <option value="female">♀ メス</option>
      </select>
    </div>
    <div>
      <label>性格・特徴</label>
      <input type="text" v-model="editCat.description" />
    </div>
    <div>
      <label>公開</label>
      <input type="checkbox" v-model="editCat.is_public" />
    </div>
    <div>
      <label>画像</label>
      <input
        type="file"
        accept="image/*"
        @change="onEditFileChange"
        ref="editImageInput"
      />
    </div>
    <div>
      <label>画像を削除</label>
      <input type="checkbox" v-model="deleteImage" />
    </div>
    <button @click="updateCat">更新する</button>
    <button @click="cancelEdit">キャンセル</button>
  </div>

  <!-- 一覧 -->
  <div class="cat-list">
    <div class="cat-card" v-for="cat in cats" :key="cat.id">
      <img
        :src="cat.image_url ? cat.image_url : '/no_image.png'"
        :alt="cat.name"
      />
      <p class="cat-name">{{ cat.name }}</p>
      <p class="cat-gender">
        {{ cat.gender === "male" ? "オス ♂" : "メス ♀" }}
      </p>
      <p class="cat-desc">{{ cat.description }}</p>
      <p>公開：{{ cat.is_public ? "公開" : "非公開" }}</p>
      <button @click="startEdit(cat)">編集</button>
      <button @click="deleteCat(cat.id)">削除</button>
    </div>
  </div>
</template>