<script>
    import { MoreVertical, Play, Square, RefreshCw, Trash2, Terminal, List, File, Settings } from 'lucide-svelte';
    import { page } from '$app/stores';

    
    $: spaceId = $page.params.spaceId;
    $: appId = $page.params.appId;
    
    export let app;
    let isOpen = false;
    
    const menuItems = [
      { icon: Play, label: 'Start All', action: () => console.log('Start', app.guid) },
      { icon: Square, label: 'Stop All', action: () => console.log('Stop', app.guid) },
      { icon: RefreshCw, label: 'Restart All', action: () => console.log('Restart', app.guid) },
      { icon: Terminal, label: 'Routes', action: () => console.log('Edit Routes', app.guid) },
      { icon: List, label: 'Variables', action: () => console.log('Variables', app.guid) },
      { icon: File, label: 'Log Stream', action: () => console.log('Log Stream', app.guid) },
      { icon: Settings, label: 'Scale Config', action: () => window.location.href = `/app/org/${app.org_guid}/space/${spaceId}/app/${appId}/scale` },
      { icon: Trash2, label: 'Delete App', action: () => console.log('Delete', app.guid) },
    ];
  
    function handleClickOutside(event) {
      if (isOpen && !event.target.closest('.menu-container')) {
        isOpen = false;
      }
    }
  </script>
  
  <svelte:window on:click={handleClickOutside} />
  
  <div class="relative menu-container">
    <button 
      on:click={() => isOpen = !isOpen} 
      class="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
    >
      <MoreVertical class="w-4 h-4" />
    </button>
    
    {#if isOpen}
      <div class="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg z-50">
        {#each menuItems as item}
          <button
            on:click={() => {
              item.action();
              isOpen = false;
            }}
            class="w-full flex items-center space-x-2 px-4 py-2 hover:bg-neutral-800 text-left transition-colors first:rounded-t-lg last:rounded-b-lg"
          >
            <svelte:component this={item.icon} class="w-4 h-4" />
            <span>{item.label}</span>
          </button>
        {/each}
      </div>
    {/if}
  </div>