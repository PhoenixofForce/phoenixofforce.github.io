<svelte:head>
  <title>Theme Test</title>
</svelte:head>

<div class="w-[90vw] max-w-6xl mx-auto py-8">
  <h1 class="text-3xl font-bold mb-8">Theme Test</h1>

  <div class="flex flex-wrap gap-4">
    <div
      class="w-50 h-10 bg-primary text-primary-content flex items-center justify-center rounded-lg"
    >
      primary
    </div>
    <div
      class="w-50 h-10 bg-secondary text-secondary-content flex items-center justify-center rounded-lg"
    >
      secondary
    </div>
    <div class="w-50 h-10 bg-accent text-accent-content flex items-center justify-center rounded-lg">
      accent
    </div>
    <div
      class="w-50 h-10 bg-neutral text-neutral-content flex items-center justify-center rounded-lg"
    >
      neutral
    </div>
    <div
      class="w-50 h-10 bg-base-100 text-base-content flex items-center justify-center rounded-lg"
    >
      base-100
    </div>
    <div
      class="w-50 h-10 bg-base-200 text-base-content flex items-center justify-center rounded-lg"
    >
      base-200
    </div>
    <div
      class="w-50 h-10 bg-base-300 text-base-content flex items-center justify-center rounded-lg"
    >
      base-300
    </div>
    <div class="w-50 h-10 bg-info text-info-content flex items-center justify-center rounded-lg">
      info
    </div>
    <div
      class="w-50 h-10 bg-success text-success-content flex items-center justify-center rounded-lg"
    >
      success
    </div>
    <div
      class="w-50 h-10 bg-warning text-warning-content flex items-center justify-center rounded-lg"
    >
      warning
    </div>
    <div class="w-50 h-10 bg-error text-error-content flex items-center justify-center rounded-lg">
      error
    </div>
  </div>

  <h2 class="text-2xl font-bold mt-12 mb-6">Buttons</h2>
  <div class="flex flex-wrap gap-4">
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-error">Error</button>
    <button class="btn btn-ghost">Ghost</button>
  </div>

  <h2 class="text-2xl font-bold mt-12 mb-6">Ghost Buttons</h2>
  <div class="flex flex-wrap gap-4">
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-ghost btn-primary">Ghost Primary</button>
    <button class="btn btn-ghost btn-secondary">Ghost Secondary</button>
    <button class="btn btn-ghost btn-accent">Ghost Accent</button>
    <button class="btn btn-ghost btn-neutral">Ghost Neutral</button>
    <button class="btn btn-ghost btn-info">Ghost Info</button>
    <button class="btn btn-ghost btn-success">Ghost Success</button>
    <button class="btn btn-ghost btn-warning">Ghost Warning</button>
    <button class="btn btn-ghost btn-error">Ghost Error</button>
  </div>

  <h2 class="text-2xl font-bold mt-12 mb-6">Badges</h2>
  <div class="flex flex-wrap gap-4">
    <span class="badge badge-primary">Primary</span>
    <span class="badge badge-secondary">Secondary</span>
    <span class="badge badge-accent">Accent</span>
    <span class="badge badge-neutral">Neutral</span>
    <span class="badge badge-info">Info</span>
    <span class="badge badge-success">Success</span>
    <span class="badge badge-warning">Warning</span>
    <span class="badge badge-error">Error</span>
    <span class="badge bg-base-200">bg-base-200</span>
  </div>
</div>