<script>
  import { createEventDispatcher } from "svelte";
  import { i18n, updateMessages } from "../stores.js";
  import { i18nNav } from "../langs/nav";

  updateMessages(i18nNav);

  const dispatch = createEventDispatcher();

  export let tabs;
  export let active;

  function genClass(act, id) {
    return act === id ? "active" : "";
  }
  function switchTab(id) {
    return function() {
      dispatch("switch", id);
    };
  }
</script>

<style>
  .with-tabs {
    border-top: 0;
    border-radius: 0 0 4px 4px;
  }
</style>

<ul class="nav nav-tabs">
  {#each tabs as tab}
    <li role="presentation" class={genClass(active, tab.id)}>
      <a href="javascript:;" on:click={switchTab(tab.id)}>{$i18n(tab.id)}</a>
    </li>
  {/each}
</ul>