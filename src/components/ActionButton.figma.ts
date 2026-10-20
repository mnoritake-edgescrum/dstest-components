// url=https://www.figma.com/design/TCcv3e1s64xN6ce7W0FCBm/DS-test?node-id=11-28
// component=ActionButton

import figma from "figma"

const instance = figma.selectedInstance
const appearance = instance.getEnum("Type", { Primary: "filled", Secondary: "plain", Ghost: "tinted" })
const density = instance.getEnum("Size", { Medium: "compact", Small: "comfortable" })
const isInactive = instance.getEnum("Disabled", { True: true, False: false })
const label = instance.getString("Label")

export default {
  id: "ActionButton",
  imports: ["import { ActionButton } from '@make-kits/kitverifyccgithub'"],
  example: figma.code`<ActionButton${figma.helpers.react.renderProp("appearance", appearance)}${figma.helpers.react.renderProp("density", density)}${figma.helpers.react.renderProp("isInactive", isInactive)}>${label}</ActionButton>`,
  metadata: { nestable: true },
}
