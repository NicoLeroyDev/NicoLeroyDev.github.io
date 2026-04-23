const experiencesFiles = import.meta.glob('./*.data.ts', { eager: true });

export function getExperiencesData(lang: string) {
  const experiencesData: Record<string, any> = {};

  for (const path in experiencesFiles) {
    if (path.includes('experiences.data.ts')) continue;

    const module = experiencesFiles[path] as any;
    const fileName = path.split('/').pop() || '';
    const name = fileName.replace('.data.ts', '');

    if (name && module.getExperienceData) {
      experiencesData[name] = module.getExperienceData(lang);
    }
  }

  return experiencesData;
}
