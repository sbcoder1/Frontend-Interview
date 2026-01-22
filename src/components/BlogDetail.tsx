import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "../api/blogs";

export default function BlogDetail({
  blogId,
}: {
  blogId: number | null;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => getBlogById(blogId as number),
    enabled: !!blogId,
  });

  if (!blogId) {
    return (
      <div className="main-content" style={{ minHeight: '400px' }}>
        <div style={{ padding: '32px', textAlign: 'center', color: '#000' }}>
          <p>Select an article from the Latest Articles to read the full content</p>
        </div>
      </div>
    );
  }

  if (isLoading) return (
    <div className="main-content" style={{ minHeight: '400px' }}>
      <div style={{ padding: '32px', textAlign: 'center' }}>
        <div style={{ color: '#000' }}>Loading article...</div>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="main-content" style={{ minHeight: '400px' }}>
      <div style={{ padding: '32px', textAlign: 'center', color: '#dc2626' }}>
        <p>Error loading article</p>
      </div>
    </div>
  );

  return (
    <div className="main-content">
      {/* Article Header */}
      <div className="content-header">
        <div className="content-category">
          {data?.category.join(' & ')}
        </div>
        <div className="content-date">
          {new Date(data!.date).toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric', 
            year: 'numeric'
          })}
        </div>
      </div>

      <div className="content-body">
        {/* Title */}
        <h1 className="content-title">
          {data?.title}
        </h1>

        {/* Cover Image */}
        {data?.coverImage && (
          <div style={{ marginBottom: '24px' }}>
            <img
              src={data.coverImage}
              alt={data.title}
              className="content-image"
            />
          </div>
        )}

        {/* Description */}
        <div style={{ marginBottom: '24px' }}>
          <p className="content-description">
            {data?.description}
          </p>
        </div>

        {/* Content */}
        <div className="content-text">
          {data?.content.split('\n\n').map((paragraph, index) => (
            <p key={index} style={{ marginBottom: '16px' }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags/Categories */}
        <div className="content-tags">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {data?.category.map((cat, index) => (
              <span key={index} className="tag">
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
