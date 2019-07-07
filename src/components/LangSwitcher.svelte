<script>
  import { onDestroy } from "svelte";
  import { lang, langs, updateLang, i18n } from "../stores.js";

  function switchLang(event) {
    updateLang(event.currentTarget.value);
  }

  function selected(lng) {
    return $lang === lng ? 'selected' : '';
  }
</script>

<select on:change={switchLang}>
  {#each langs as lng}
    <option value={lng} selected={selected(lng)}>{$i18n(lng)}</option>
  {/each}
</select>