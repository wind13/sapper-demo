<script>
  import { i18n } from "../stores.js";
  import "../langs/messages.js";

  let a = 8;
  let b = 2;
</script>

<style>
  h3 {
    margin-top: 2em;
  }
</style>

<p>{$i18n('messages.content')}</p>

<input type="number" bind:value={a} />
*
<input type="number" bind:value={b} />
=
<span>{a * b}</span>

<h3>{$i18n('messages.result')}</h3>
<p>{a} * {b} = {a * b}</p>