// 共通のUIエフェクト処理（fadeUp + ハンバーガーメニュー）

export const useUiEffects = () => {
  const $ = window.$

  // フェードアップ処理
  const addFadeUpClass = () => {
    $(".fadeUp-trigger").each(function () {
      const frameIn = $(this).offset().top - $(window).height()
      if (frameIn <= $(window).scrollTop()) {
        $(this).addClass("fadeUpActive")
      }
    })
  }

  // フェードアップを有効化
  const enableFadeUp = () => {
    addFadeUpClass()
    $(window).off('scroll.fadeUp').on('scroll.fadeUp', addFadeUpClass)
  }

  // ハンバーガーメニューを有効化
  const enableHamburger = () => {
    $('#hamburger').off('click.hamburger').on('click.hamburger', function () {
      $(this).toggleClass('open')
      $('#nav-menu').toggleClass('open')
    })
  }

  return {
    enableFadeUp,
    enableHamburger
  }
}