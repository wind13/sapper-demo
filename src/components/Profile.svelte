<script>
  import { updateMessages, i18n } from "../stores.js";
  updateMessages({
    "en-US": {
      "profile.content": "Profile content"
    },
    "zh-CN": {
      "profile.content": "个人中心的内容"
    }
  });
</script>

<p>{$i18n('profile.content')}</p>