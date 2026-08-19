<script lang="ts">
	import DOMPurify from 'dompurify';
	import { marked } from 'marked';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const {
		md,
		imageBase,
		linkBase,
		before,
		after,
		class: className,
		...rest
	}: {
		md?: string;
		imageBase?: string;
		linkBase?: string;
		before?: Snippet;
		after?: Snippet;
	} & Omit<HTMLAttributes<HTMLDivElement>, 'children'> = $props();
	const sanitizedHtml = $derived(
		rewriteUrls(
			DOMPurify.sanitize(
				// eslint-disable-next-line no-misleading-character-class
				marked.parse((md ?? '').replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ''), {
					async: false
				})
			)
		)
	);

	function absolute(url: string, base: string) {
		try {
			return new URL(url, base).href;
		} catch {
			return url;
		}
	}

	function rewriteUrls(html: string) {
		if (typeof DOMParser === 'undefined' || (!imageBase && !linkBase)) return html;

		const doc = new DOMParser().parseFromString(html, 'text/html');

		if (imageBase) {
			for (const img of doc.querySelectorAll('img')) {
				const src = img.getAttribute('src');
				if (src) img.setAttribute('src', absolute(src, imageBase));
			}
		}

		if (linkBase) {
			for (const anchor of doc.querySelectorAll('a')) {
				const href = anchor.getAttribute('href');
				if (href) anchor.setAttribute('href', absolute(href, linkBase));
			}
		}

		return doc.body.innerHTML;
	}
</script>

<div class="prose {className}" {...rest}>
	{@render before?.()}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html sanitizedHtml}
	{@render after?.()}
</div>