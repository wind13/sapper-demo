import { updateMessages } from "../stores.js";

export const i18nMessages = {
  "en-US": {
    "messages.result": "Result: ",
    "messages.content": "Messages content"
  },
  "zh-CN": {
    "messages.result": "计算结果：",
    "messages.content": "消息中心的内容"
  }
}

updateMessages(i18nMessages);