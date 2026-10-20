// url=https://www.figma.com/design/TCcv3e1s64xN6ce7W0FCBm/DS-test?node-id=2-20
// component=Button

import figma from "figma"

const label = figma.selectedInstance.getString("Label")

export default {
  id: "Button",
  imports: ["import { Button } from 'dstest-components'"],
  example: figma.code`<Button${figma.helpers.react.renderProp(
    "label",
    label,
  )}/>`,
  metadata: { nestable: true },
}
