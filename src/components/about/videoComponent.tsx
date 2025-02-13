import { list } from "@vercel/blob";

export async function VideoComponent({
  fileName,
  classname,
}: {
  fileName: string;
  classname: string;
}) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video autoPlay loop muted className={classname} aria-label="Video player">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
