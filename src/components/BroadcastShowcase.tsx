import React, { useState, useEffect } from 'react';
import { Play, Tv, ExternalLink, Globe, Share2, Radio, RotateCw, Film, ShieldCheck } from 'lucide-react';
import { BROADCAST_WORKS_LIST, PERSONAL_INFO } from '../data/portfolioData';
import { BroadcastItem } from '../types';

export const BroadcastShowcase: React.FC = () => {
  const [items] = useState<BroadcastItem[]>(BROADCAST_WORKS_LIST);
  const [previewItem, setPreviewItem] = useState<BroadcastItem>(BROADCAST_WORKS_LIST[0]);
  const [viewMode, setViewMode] = useState<'watch' | 'reel'>('watch');
  const [refreshIndex, setRefreshIndex] = useState(0);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    setIsIframeLoaded(false);
  }, [previewItem, viewMode, refreshIndex]);

  // Generate canonical Facebook embedded video player URL without errors
  const getFacebookEmbedUrl = (item: BroadcastItem, mode: 'watch' | 'reel') => {
    let targetUrl = '';
    if (mode === 'reel' && item.reelUrl) {
      targetUrl = item.reelUrl;
    } else if (item.canonicalWatchUrl) {
      targetUrl = item.canonicalWatchUrl;
    } else if (item.pageVideoUrl) {
      targetUrl = item.pageVideoUrl;
    } else {
      targetUrl = item.videoUrl || '';
    }

    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
      targetUrl
    )}&show_text=0&width=560&autoplay=0`;
  };

  const handleSelectVideo = (item: BroadcastItem) => {
    setPreviewItem(item);
    const el = document.getElementById('broadcasts');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReload = () => {
    setRefreshIndex((prev) => prev + 1);
  };

  return (
    <section id="broadcasts" className="py-20 border-t border-blue-950/80 relative bg-black">
      {/* Background News Control Room Visual Accent */}
      <div className="absolute top-0 right-0 w-full h-80 opacity-10 pointer-events-none overflow-hidden mix-blend-luminosity">
        <img
          src="./broadcast_control_room.jpg"
          alt="Broadcast Control Room"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes('unsplash')) {
              target.src = 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80';
            }
          }}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ff5722] font-semibold mb-2">
            <Radio className="w-4 h-4 text-[#ff5722] animate-pulse" />
            <span>Aarohi News Bangla Official Broadcasts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Featured Broadcast Videos
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
            Studio news broadcasts anchored by Purbasha Basu on <strong className="text-white font-semibold">Aarohi News Bangla (আরোহী নিউজ বাংলা)</strong>. Watch both videos directly inside this portfolio below.
          </p>
        </div>

        {/* Aarohi News Bangla Portal & Information Banner (Strictly Orange, Blue, Black, White) */}
        <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-950/90 via-black to-blue-950/80 border border-blue-800/60 shadow-2xl shadow-black/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-bold text-orange-400">
                Current Media Channel
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Aarohi News Bangla (আরোহী নিউজ বাংলা)
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              আরোহী নিউজ বাংলা সম্পর্কে আরও বিস্তারিত জানতে বা সরাসরি চ্যানেল ভিজিট করতে নিচে ক্লিক করুন:
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Click Here Button for Website as Requested */}
            <a
              href={PERSONAL_INFO.currentWork.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5722] hover:bg-white text-white hover:text-black font-bold text-xs sm:text-sm shadow-md transition-all group"
            >
              <Globe className="w-4 h-4" />
              <span>Aarohi News Bangla - Click Here</span>
              <span className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center text-[10px] font-bold group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </a>

            {/* Facebook Page Button */}
            <a
              href={PERSONAL_INFO.currentWork.facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Official Facebook Page</span>
            </a>
          </div>
        </div>

        {/* Big In-Portfolio Direct Video Player Screen */}
        <div className="mb-12 bg-black rounded-3xl border border-blue-900/60 overflow-hidden shadow-2xl">
          {/* Player Header Controls Strip */}
          <div className="p-4 sm:p-5 bg-[#080c14] border-b border-blue-950 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-950 border border-blue-600 text-orange-400 font-mono text-[11px] font-bold">
                  Aarohi News Bangla
                </span>
                <span className="text-xs text-white/70 font-medium">
                  {previewItem.duration}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-blue-300 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Stream
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                {previewItem.title}
              </h3>
              {previewItem.caption && (
                <p className="text-xs text-white/90 font-medium mt-0.5">
                  {previewItem.caption}
                </p>
              )}
            </div>

            {/* Interactive Player Mode & Action Controls */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Watch vs Reel mode toggle */}
              <div className="flex items-center bg-black border border-blue-900 rounded-xl p-1 text-xs">
                <button
                  type="button"
                  onClick={() => setViewMode('watch')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    viewMode === 'watch'
                      ? 'bg-[#ff5722] text-white shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                  title="Broadcast Player"
                >
                  Broadcast Player
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('reel')}
                  className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                    viewMode === 'reel'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                  title="Reel Player"
                >
                  Reel Player
                </button>
              </div>

              {/* Refresh / Reload Button */}
              <button
                type="button"
                onClick={handleReload}
                className="p-2 text-white/70 hover:text-white bg-black hover:bg-blue-950 rounded-xl border border-blue-900 transition-colors"
                title="Reload Stream Player"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>

              {/* Direct Open in Facebook Button */}
              <a
                href={previewItem.reelUrl || previewItem.canonicalWatchUrl || previewItem.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Direct View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Direct Embedded Facebook Video Viewport */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <iframe
              key={`${previewItem.id}-${viewMode}-${refreshIndex}`}
              src={getFacebookEmbedUrl(previewItem, viewMode)}
              title={previewItem.title}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
              allowFullScreen={true}
              onLoad={() => setIsIframeLoaded(true)}
              className="w-full h-full border-0 absolute inset-0"
            />

            {/* Loading Placeholder */}
            {!isIframeLoaded && (
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 text-center pointer-events-none z-0">
                <div className="w-10 h-10 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mb-3" />
                <span className="text-sm font-semibold text-white">Connecting to Aarohi News Stream...</span>
                <span className="text-xs text-white/60 mt-1">Embedding direct broadcast feed</span>
              </div>
            )}
          </div>

          {/* Player Bottom Bar */}
          <div className="p-4 bg-[#080c14] border-t border-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>
                Anchor: <strong className="text-white font-medium">{PERSONAL_INFO.name}</strong> · Channel: <strong className="text-orange-400 font-medium">Aarohi News Bangla</strong>
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-blue-400 font-mono flex items-center gap-1">
                ● Direct In-Portfolio Video Stream
              </span>
            </div>
          </div>
        </div>

        {/* Exactly The 2 Featured Videos with titles Video 1 and Video 2, plus real captions */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Film className="w-5 h-5 text-[#ff5722]" />
              <span>Featured Broadcast Videos (2 Episodes)</span>
            </h3>
            <span className="text-xs text-white/60">
              Click any video to preview directly above
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, idx) => {
              const isSelected = previewItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectVideo(item)}
                  className={`group bg-[#080c14] rounded-2xl border p-5 sm:p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    isSelected
                      ? 'border-[#ff5722] shadow-2xl shadow-orange-950/40 ring-2 ring-[#ff5722]'
                      : 'border-blue-950 hover:border-blue-800'
                  }`}
                >
                  <div>
                    {/* Header Strip: Video 1 / Video 2 */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-950 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="font-bold text-orange-400 text-sm">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-mono text-white/60">
                        Aarohi News Bangla
                      </span>
                    </div>

                    {/* Exact Video Caption as requested */}
                    <div className="mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                        Original Video Caption:
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-orange-400 transition-colors">
                        {item.caption || item.description}
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] px-2.5 py-0.5 rounded bg-black border border-blue-950 text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-950 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleSelectVideo(item)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-[#ff5722] text-white shadow-md'
                          : 'bg-blue-900/60 hover:bg-[#ff5722] text-white'
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isSelected ? 'Now Playing in Player Above' : 'Watch Directly Here'}</span>
                    </button>

                    <a
                      href={item.reelUrl || item.canonicalWatchUrl || item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 text-white/70 hover:text-white bg-black hover:bg-blue-950 rounded-xl border border-blue-900 transition-colors"
                      title="Open on Facebook"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
