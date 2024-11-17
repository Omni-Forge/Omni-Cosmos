<script>
    import '../../app.css'
    import { onMount } from 'svelte'
    import { auth } from '../../stores/auth'
    import { page } from '$app/stores'
    import { authGuard } from '../../stores/authGuard'
    import { SearchOutline } from 'flowbite-svelte-icons'
    import { browser } from '$app/environment'
    import Navbar from '../../components/Navbar.svelte'
    import { Spinner } from 'flowbite-svelte'

    /** @type {{ avatar: any; name: any; email?: string; } | null} */
    let user = null
    let loading = false

    auth.subscribe(state => {
        user = state.user
        loading = state.loading
    })

    loading = false;
</script>

{#if loading}
    <div class="flex justify-center items-center h-screen bg-black">
        <Spinner size="12" class="text-gray-200 animate-spin" />
    </div>
    {:else}
    <div class="min-h-screen text-gray-200">
        <Navbar></Navbar>
        WTF is this: Its a chemical burn
        <main class="pt-24 px-4 sm:px-6 lg:px-8">
            <slot />
        </main>
    </div>
{/if}