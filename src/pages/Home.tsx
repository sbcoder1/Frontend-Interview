import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";

export default function Home() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(1);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', fontFamily: 'Times New Roman, Times, serif' }}>
      {/* Header */}
      <div style={{ borderBottom: '2px solid #000', padding: '8px 16px' }}>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#000' }}>CA CA MONK</div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        {/* Blog Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#000', marginBottom: '16px' }}>
            CA Monk Blog
          </h1>
          <p style={{ color: '#000', fontSize: '16px' }}>
            Stay updated with the latest trends in <u>finance</u>, <u>accounting</u>, and career growth.
          </p>
        </div>

        {/* Main Layout */}
        <div style={{ display: 'flex', gap: '24px' }} className="main-layout">
          {/* Sidebar - Latest Articles */}
          <div className="sidebar">
            <div className="sidebar-container">
              <div className="sidebar-header">
                <h2 className="sidebar-title">Latest Articles</h2>
              </div>
              <BlogList onSelect={setSelectedBlogId} selectedId={selectedBlogId} />
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ flex: 1 }}>
            <BlogDetail blogId={selectedBlogId} />
          </div>
        </div>
      </div>
    </div>
  );
}
