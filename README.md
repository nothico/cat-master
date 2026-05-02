# CHOCOTA CAFE - 猫スタッフ管理システム

Vue 3 + Supabase で構築した猫カフェのスタッフ猫管理 CRUD システムです。

🌐 **公開URL**: https://cat-master-eight.vercel.app/
🔧 **管理画面**: https://cat-master-eight.vercel.app/login


## 概要

架空の猫カフェ「CHOCOTA CAFE」のWebサイト + 管理者向けの猫スタッフ管理システムです。
管理画面から猫スタッフの登録・編集・削除・公開設定ができ、フロントの猫スタッフ紹介ページに即時反映されます。

## 主な機能

### フロント（一般ユーザー向け）
- トップページ（スライドショー、News、料金、ドリンクメニュー、アクセス）
- 猫スタッフ紹介ページ（DBから取得した公開フラグTrueの猫を表示）
- お問い合わせフォーム（バリデーション + メール送信）

### 管理画面
- 管理者ログイン
- 猫スタッフのCRUD（一覧・新規登録・編集・削除）
- 画像アップロード（Supabase Storage 利用）
- 公開／非公開フラグの切り替え

## 使用技術

| カテゴリ | 技術 |
|---|---|
| フロントエンド | Vue 3 (Options API) / Vue Router |
| ビルドツール | Vite |
| バックエンド・DB | Supabase (Database / Storage) |
| メール送信 | EmailJS |
| ホスティング | Vercel |
| その他 | jQuery / slick (スライドショー) |

## 動作確認用ログイン情報

```
管理者ID：admin
パスワード：catpass
```

## ローカル開発

### セットアップ

```sh
npm install
```

### 開発サーバー起動

```sh
npm run dev
```

### 本番ビルド

```sh
npm run build
```

## 注意事項（実装の補足）

本プロジェクトはポートフォリオ用のため、認証機構は簡易化しています。

- 管理者ログインは `.env` に記載した固定ID/パスワードで認証
- Supabase の RLS（Row Level Security）は無効化

実運用では Supabase Auth による認証と RLS のポリシー設定が必須です。

## 学習期間
学習期間：約3ヶ月（HTML/CSS/JS基礎、Vue 3、Supabaseなど）