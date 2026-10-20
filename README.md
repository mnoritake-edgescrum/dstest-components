# dstest-components

Figma の検証用ライブラリ「DS-test」に対応する React の部品です。Code Connect と Make kit の検証に使います。

| Figma | コード |
|---|---|
| Library / Button（プロパティ Label） | `src/components/Button.tsx`（`label`） |
| 変数（Primitives / Color / Spacing） | `src/tokens.css`（名前は Figma の WEB のコード表記と同じ） |
| テキストスタイル Heading/L, Body/M | `.ds-heading-l`, `.ds-body-m` |
| 影 Shadow/Card | `--shadow-card` |

Dark は `data-theme="dark"` で切り替えます。

```tsx
import { Button } from 'dstest-components'
import 'dstest-components/tokens.css'

<Button label="保存" />
```

## Code Connect（CLI）

`src/components/Button.figma.ts` が、Figma の Button（node 2:20）とこの部品の対応表です。Figma の `Label` プロパティを `label` に渡します。Code Connect CLI v2 のテンプレート形式です。

```bash
pnpm install
pnpm figma:parse                                    # 中身の確認（トークン不要）
FIGMA_ACCESS_TOKEN=... pnpm figma:publish --dry-run # 公開の予行
FIGMA_ACCESS_TOKEN=... pnpm figma:publish           # 公開
```

トークンには `Code Connect: Write` と `File content: Read` のスコープが要ります。
