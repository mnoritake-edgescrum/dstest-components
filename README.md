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
