import Head from "next/head";
import type { AppProps } from 'next/app'
import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";
import Index from "./index";

const { EmotionCacheProvider, withEmotionCache } = createEmotionSsrAdvancedApproach({ "key": "css" });

export { withEmotionCache };


export default function App(_props: AppProps) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<EmotionCacheProvider>
				<Index />
    			<script type="module" src="gouvfr_dsfr_dist/dsfr.module.min.js"></script>
    			<script type="text/javascript" noModule src="gouvfr_dsfr_dist/dsfr.nomodule.min.js"></script>
			</EmotionCacheProvider>
		</>
	);

}
