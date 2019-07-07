<script>
  import { updateMessages, i18n } from "../stores.js";
  updateMessages({
    "en-US": {
      "home.content": "Home content"
    },
    "zh-CN": {
      "home.content": "首页的内容"
    }
  });
</script>

<p>{$i18n('home.content')}</p>