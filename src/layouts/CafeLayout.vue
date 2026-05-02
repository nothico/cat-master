<script setup></script>

<template>
  <header>
    <div class="bg-1">
      <div class="inner-1 flex topalign">
        <h1>
          <a href="/"
            ><img
              src="/src/assets/images/logo_240x160.png"
              alt="CHOCOTA CAFE"
              width="240"
              height="160"
          /></a>
        </h1>
        <div class="head-address">
          <address>
            <dl class="flex">
              <dt>
                <div class="swing">
                  <img
                    src="/src/assets/images/icon_tell20x27.png"
                    alt="電話番号・営業時間"
                    width="20"
                    height="27"
                  />
                </div>
              </dt>
              <dd>
                <p class="tel">03-1111-1111</p>
                <p>営業時間：10：00 ～ 21：00</p>
                <p>定休日： 月曜日</p>
              </dd>
            </dl>
          </address>
        </div>
        <button class="hamburger" id="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="inner-1">
        <nav>
          <ul class="flex" id="nav-menu">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/catstaff">猫staff</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <div class="inner-1 header-br">
      <RouterView />
    </div>
  </main>

  <footer>
    <div class="inner-1">
      <div class="flex">
        <div class="box-1">
          <a href="#"
            ><img
              src="/src/assets/images/banner_edit_336x280.png"
              alt="エース英会話教室"
              width="336"
              height="280"
          /></a>
        </div>
        <div class="box-2">
          <p class="footer-logo">
            <img
              src="/src/assets/images/text_logo_240x80.png"
              alt="CHOCOTA CAFE"
              width="240"
              height="80"
            />
          </p>
          <p class="contact"><RouterLink to="/contact">お問い合わせはこちら</RouterLink></p>
        </div>
        <div class="box-3 flex">
          <p>
            <a href="#"
              ><img
                src="/src/assets/images/icon_instagram50x50.png"
                alt="CHOCOTA CAFEのInstagramアカウントへ"
                width="50"
                height="50"
            /></a>
          </p>
          <p>
            <a href="#"
              ><img
                src="/src/assets/images/icon_x_50x50.png"
                alt="CHOCOTA CAFEのXアカウントへ"
                width="50"
                height="50"
            /></a>
          </p>
        </div>
      </div>
      <p class="copyright"><small>&copy;2026 Chocota Co.,Ltd.</small></p>
    </div>
  </footer>
</template>

<style scoped></style>
