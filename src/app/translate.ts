export async function translation(lang: string, namespace: string) {
    try {
        const resource = await import(`../../locale/${lang}/${namespace}.json`);
        // console.log(resource);
        return resource;
    } catch (error) {
        console.error(`Error loading translation for ${lang}/${namespace}:`, error);
        return;
    }
}