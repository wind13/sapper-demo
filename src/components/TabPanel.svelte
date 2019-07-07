<script>
  export let display;
  function show(bln) {
    return bln ? "" : "hide";
  }
</script>

<style>
  .with-tabs {
    border-top: 0;
    border-radius: 0 0 4px 4px;
  }
  .hide {
    display: none;
  }
</style>

<div class="panel panel-default with-tabs {show(display)}">
  <div class="panel-body">
    <slot />
  </div>
</div>