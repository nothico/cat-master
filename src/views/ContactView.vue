<script>
import emailjs from '@emailjs/browser'
import { useUiEffects } from '../composables/useUiEffects'

export default {
  data() {
    return {
      // フォームのデータ
      form: {
        name: '',
        email: '',
        message: ''
      },
      // 送信中かどうか
      isSending: false,
      // 送信完了メッセージ
      successMessage: '',
      // 送信エラーメッセージ
      errorMessage: '',
      // バリデーションエラーメッセージ
      errors: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  mounted() {
    const { enableFadeUp, enableHamburger } = useUiEffects()
    enableFadeUp()
    enableHamburger()
  },
  methods: {
    // バリデーションチェック
    validate() {
      this.errors = { name: '', email: '', message: '' }
      let isValid = true

      if (!this.form.name.trim()) {
        this.errors.name = 'お名前を入力してください'
        isValid = false
      }

      if (!this.form.email.trim()) {
        this.errors.email = 'メールアドレスを入力してください'
        isValid = false
      } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailPattern.test(this.form.email)) {
          this.errors.email = 'メールアドレスの形式が正しくありません'
          isValid = false
        }
      }

      if (!this.form.message.trim()) {
        this.errors.message = 'お問い合わせ内容を入力してください'
        isValid = false
      }

      return isValid
    },
    // 送信処理
    async sendEmail() {
      if (!this.validate()) return
      this.isSending = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: this.form.name,
            email: this.form.email,
            message: this.form.message
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        this.successMessage = 'お問い合わせを送信しました。ありがとうございました。'
        // フォームをリセット
        this.form = { name: '', email: '', message: '' }
      } catch (error) {
        console.log(error)
        this.errorMessage = '送信に失敗しました。時間をおいて再度お試しください。'
      } finally {
        this.isSending = false
      }
    },
    // キャンセル（リセット）
    resetForm() {
      this.form = { name: '', email: '', message: '' }
      this.errors = { name: '', email: '', message: '' }
      this.successMessage = ''
      this.errorMessage = ''
    }
  }
}
</script>  

<template>
  <div class="intro fadeUp-trigger">
    <h2>お問い合わせ</h2>
  </div>
  <div class="contact-wrap">
    <p class="contact-intro">下記フォームよりお気軽にお問い合わせください。</p>

    <div class="contact-form">
      <div class="form-row">
        <label>お名前</label>
        <input type="text" v-model="form.name" />
        <p class="field-error" v-if="errors.name">{{ errors.name }}</p>
      </div>
      <div class="form-row">
        <label>メールアドレス</label>
        <input type="email" v-model="form.email" />
        <p class="field-error" v-if="errors.email">{{ errors.email }}</p>
      </div>
      <div class="form-row">
        <label>お問い合わせ内容</label>
        <textarea v-model="form.message" rows="6"></textarea>
        <p class="field-error" v-if="errors.message">{{ errors.message }}</p>
      </div>

      <p class="success" v-if="successMessage">{{ successMessage }}</p>
      <p class="error" v-if="errorMessage">{{ errorMessage }}</p>

      <div class="button-group">
        <button @click="sendEmail" :disabled="isSending" class="btn-submit">
          {{ isSending ? "送信中..." : "送信する" }}
        </button>
        <button @click="resetForm" class="btn-cancel">キャンセル</button>
      </div>
    </div>
  </div>
</template>