<script>
import { supabase } from '../supabase'
import { useUiEffects } from '../composables/useUiEffects'

export default {
  data() {
    return {
      cats: []
    }
  },
  async mounted() {
    const { data, error } = await supabase
      .from('cat_staff')
      .select('*')
      .eq('is_public', true)
    if (error) {
      console.log(error)
    } else {
      this.cats = data
    }

    const { enableFadeUp, enableHamburger } = useUiEffects()
    enableFadeUp()
    enableHamburger()
  }
}
</script>

<template>
  <div class="intro fadeUp-trigger">
    <h2>スタッフ猫の紹介</h2>
  </div>
  <div class="staff-cat">
    <div class="tencho">
      <img src="/src/assets/images/chocota_syomei_210x238.png" alt="チョコタ">
      <p>店長のチョコタです <span class="male">♂</span></p>
    </div>
    <div class="cat-list">
      <div class="cat-card" v-for="cat in cats" :key="cat.id">
        <img :src="cat.image_url ? cat.image_url : '/no_image.png'" :alt="cat.name">
        <div class="cat-info">
          <p class="cat-name">
            {{ cat.name }}
            <span :class="cat.gender === 'male' ? 'male' : 'female'">
              {{ cat.gender === 'male' ? '♂' : '♀' }}
            </span>
          </p>
          <p class="cat-desc">{{ cat.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>