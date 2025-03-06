export default async function ProjectShowcase({
  params,
}: {
  params: Promise<{ lang: string; projectName: string }>;
}) {
  const projectName = (await params).projectName;

  return (
    <div>
      <h1>{projectName.replaceAll("-", " ")} Showcase</h1>
    </div>
  );
}
