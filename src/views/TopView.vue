<script>
import { useUiEffects } from '../composables/useUiEffects'

export default {
  mounted() {
    const $ = window.$

    $('#mv-slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 3500,
      speed: 3000,
      arrows: false,
      dots: false,
      fade: true
    })

    $('#drink-slide').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 2500,
      arrows: false,
      dots: false,
      fade: false,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 2 } }
      ]
    })

    const { enableFadeUp, enableHamburger } = useUiEffects()
    enableFadeUp()
    enableHamburger()
  }
}
</script>

<template>
  <div id="mv-slide">
    <div><img src="/src/assets/images/mv_photo_1080x560.jpg" alt="CHOCOTA CAFE OPEN" width="1080" height="560"></div>
    <div><img src="/src/assets/images/mv_photo2_1080x560.jpg" alt="CHOCOTA CAFE OPEN" width="1080" height="560"></div>
    <div><img src="/src/assets/images/mv_photo3_1080x560.jpg" alt="CHOCOTA CAFE OPEN" width="1080" height="560"></div>
  </div>
  <div class="text flex">
    <section class="fadeUp-trigger">
      <h2>NEWS</h2>
      <dl>
        <div class="flex">
          <dt>202x.xx.xx</dt>
          <dd>OPEN</dd>
        </div>
        <div class="flex">
          <dt>202x.xx.xx</dt>
          <dd>staff猫ちゃん募集</dd>
        </div>
        <div class="flex">
          <dt>202x.xx.xx</dt>
          <dd>感謝デー　入場料20%割引になります</dd>
        </div>
        <div class="more">
          <dt></dt>
          <dd><a href="#">&gt; more</a></dd>
        </div>
      </dl>
    </section>
    <section class="fee fadeUp-trigger">
      <h2>料金</h2>
      <dl>
        <div class="flex">
          <dt>入場料</dt>
          <dd>
            <p>900円/30分（ワンドリンクオーダー制）</p>
            <p class="add-fee">・30分以降　250円/10分</p>
          </dd>
        </div>
        <div class="flex">
          <dt>最大料金</dt>
          <dd>平日：2,100円、土日祝日：3,100円</dd>
        </div>
      </dl>
    </section>
  </div>
  <section class="drinkmenu">
    <h2><img src="/src/assets/images/drink_menu_150x50.png" alt="ドリンクメニュー" width="150" height="50"></h2>
    <div id="drink-slide" class="drink">
      <div><img src="/src/assets/images/drink_01_185x185.jpg" alt="Xmas drink" width="185" height="185"></div>
      <div><img src="/src/assets/images/drink_02_185x185.jpg" alt="latte artキジトラ" width="185" height="185"></div>
      <div><img src="/src/assets/images/drink_03_185x185.jpg" alt="latte artハチワレ" width="185" height="185"></div>
      <div><img src="/src/assets/images/drink_04_185x185.jpg" alt="アイスティ" width="185" height="185"></div>
      <div><img src="/src/assets/images/drink_05_185x185.jpg" alt="オレンジジュース" width="185" height="185"></div>
      <div><img src="/src/assets/images/drink_06_185x185.png" alt="抹茶オレ" width="185" height="185"></div>
      <div><img src="/src/assets/images/drink_07_185x185.png" alt="アイスココア" width="185" height="185"></div>
    </div>
  </section>
  <div class="access">
    <h2><img src="/src/assets/images/access_150x50.png" alt="アクセス" width="150" height="50"></h2>
    <div class="flex">
      <address>
        <p>〒169-0075<br>東京都新宿区高田馬場2-14-2 新陽ビル7階</p>
        <p>営業時間：10：00 ～ 21：00</p>
        <p>定休日： 月曜日</p>
        <p class="tel">TEL: 03-1111-1111</p>
      </address>
      <p><iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.559825039235!2d139.7045717760281!3d35.71244812825813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d3c1b8274b1%3A0xdaa57ef31e29b6f0!2z5pep56iy55Sw6Zu75a2QSVTmlZnogrLjgrvjg7Pjgr_jg7w!5e0!3m2!1sja!2sjp!4v1765260378017!5m2!1sja!2sjp"
          width="450" height="330" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe></p>
    </div>
  </div>
</template>