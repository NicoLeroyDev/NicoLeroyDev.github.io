import {CollectionEntry, getCollection} from 'astro:content';

export async function getAllTools(): Promise<CollectionEntry<'tools'>[]> {
    return await getCollection('tools', ({data}) => {
        return import.meta.env.PROD ? !data.draft : true;
    });
}

/**
 * @param allTools
 * @param toolsContent
 */
export function filterTools(
    allTools: CollectionEntry<'tools'>[],
    toolsContent: string[] | undefined
): CollectionEntry<'tools'>[] {
    if (!Array.isArray(toolsContent)) return [];
    return allTools.filter((tool) => toolsContent.includes(tool.id));
}