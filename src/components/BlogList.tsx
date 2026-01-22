import { useQuery } from "@tanstack/react-query";
import { getBlogs, Blog } from "../api/blogs";

export default function BlogList({
  onSelect,
  selectedId,
}: {
  onSelect: (id: number) => void;
  selectedId: number | null;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  if (isLoading) return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <div style={{ fontSize: '14px', color: '#000' }}>Loading...</div>
    </div>
  );
  
  if (error) return (
    <div style={{ padding: '16px', textAlign: 'center' }}>
      <div style={{ fontSize: '14px', color: '#dc2626' }}>Error loading articles</div>
    </div>
  );

  return (
    <div>
      {data?.slice(0, 4).map((blog: Blog) => (
        <div key={blog.id}>
          <div 
            className={`article-list-item ${selectedId === blog.id ? 'selected' : ''}`}
            onClick={() => onSelect(blog.id)}
          >
            {/* Category and Date */}
            <div className="article-header">
              <div className="article-category">
                {blog.category.join('')}
              </div>
              <div className="article-date">
                {new Date(blog.date).toLocaleDateString('en-US', {
                  month: 'numeric',
                  day: 'numeric', 
                  year: 'numeric'
                })}
              </div>
            </div>

            {/* Title */}
            <h3 className="article-title">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="article-description">
              {blog.description}
            </p>

            {/* Read More */}
            <div className="read-more">
              Read More
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
