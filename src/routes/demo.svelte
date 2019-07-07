<script>
  import Profile from "../components/Profile.svelte";
  import Home from "../components/Home.svelte";
  import Messages from "../components/Messages.svelte";
  import TabPanel from "../components/TabPanel.svelte";
  import TabNav from "../components/TabNav.svelte";
  import LangSwitcher from "../components/LangSwitcher.svelte";
  import { updateMessages, i18n } from "../stores.js";
  import { i18nIndex } from "../langs/index.js";

  updateMessages(i18nIndex);

  const tabs = [
    {
      id: "home"
    },
    {
      id: "profile"
    },
    {
      id: "messages"
    }
  ];

  const translate = function(key) {
    return $i18n[key];
  };

  let active = tabs[0].id;

  function clickNav(event) {
    active = event.detail;
    // location.href = location.href + '#' + active;
  }
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  .right {
    text-align: right;
  }
</style>

<svelte:head>
  <title>{$i18n('title')}</title>
</svelte:head>

<h1>{$i18n('header')}</h1>

<div class="right">
  <LangSwitcher />
</div>

<TabNav {tabs} {active} on:switch={clickNav} />
<TabPanel display={active === tabs[0].id}>
  <Home />
</TabPanel>
<TabPanel display={active === tabs[1].id}>
  <Profile />
</TabPanel>
<TabPanel display={active === tabs[2].id}>
  <Messages />
</TabPanel>