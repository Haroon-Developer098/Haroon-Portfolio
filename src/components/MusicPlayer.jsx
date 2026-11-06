import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";
import haroon from "../assets/card.png";

const SRC = "/audio/ambient.mp3";
const TRACK = { title: "Ambient Dreams - Single", artist: "Haroon", tags: ["Ambient", "Loop"] };
const FADE_MS = 1800;
const KEY = "portfolio-music";
const VOL_KEY = "portfolio-music-vol";
const MIN_KEY = "portfolio-music-min";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const wasPlayingRef = useRef(false);

  const [volume, setVolume] = useState(() => {
    const v = parseFloat(localStorage.getItem(VOL_KEY));
    return Number.isFinite(v) ? v : 0.25;
  });
  const volRef = useRef(volume);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [minimized, setMinimized] = useState(
    () => localStorage.getItem(MIN_KEY) === "1"
  );
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const fadeTo = (target, onDone) => {
    const audio = audioRef.current;
    if (!audio) return;
    clearInterval(fadeRef.current);
    const steps = 40;
    const delta = (target - audio.volume) / steps;
    let i = 0;
    fadeRef.current = setInterval(() => {
      i++;
      audio.volume = Math.min(1, Math.max(0, audio.volume + delta));
      if (i >= steps) {
        clearInterval(fadeRef.current);
        audio.volume = target;
        onDone?.();
      }
    }, FADE_MS / steps);
  };

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      audio.volume = 0;
      await audio.play();
      setPlaying(true);
      fadeTo(volRef.current);
      localStorage.setItem(KEY, "on");
    } catch {
      /* autoplay blocked, wait for interaction */
    }
  }, []);

  const pause = () => {
    setPlaying(false);
    localStorage.setItem(KEY, "off");
    fadeTo(0, () => audioRef.current?.pause());
  };

  const onVolume = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    volRef.current = v;
    localStorage.setItem(VOL_KEY, String(v));
    clearInterval(fadeRef.current);
    const audio = audioRef.current;
    if (audio) {
      audio.volume = v;
      audio.muted = v === 0;
    }
    setMuted(v === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const onSeek = (e) => {
    const t = parseFloat(e.target.value);
    if (audioRef.current) audioRef.current.currentTime = t;
    setCurrent(t);
  };

  const setMin = (val) => {
    setMinimized(val);
    localStorage.setItem(MIN_KEY, val ? "1" : "0");
  };

  // Autostart on first interaction
  useEffect(() => {
    if (localStorage.getItem(KEY) === "off") return;

    const events = ["pointerdown", "keydown", "touchstart"];
    const start = (e) => {
      if (e.target.closest?.("[data-music-ui]")) return;
      void play();
      remove();
    };
    const remove = () => {
      events.forEach((ev) => window.removeEventListener(ev, start));
    };

    events.forEach((ev) => window.addEventListener(ev, start));
    return remove;
  }, [play]);

  // Pause when tab hidden
  useEffect(() => {
    const onVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        wasPlayingRef.current = !audio.paused;
        audio.pause();
      } else if (wasPlayingRef.current) {
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const pct = duration ? (current / duration) * 100 : 0;
  const volPct = (muted ? 0 : volume) * 100;

  return (
    <>
      <audio
        ref={audioRef}
        src={SRC}
        loop
        preload="auto"
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      <div
        data-music-ui
        className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)]"
      >
        {minimized ? (
          /* ---------- Mini spinning cover ---------- */
          <button
            onClick={() => setMin(false)}
            aria-label="Open music player"
            className="music-pop group relative block h-16 w-16 transition-transform hover:scale-110"
          >
            {playing && (
              <span className="music-glow absolute inset-0 rounded-full bg-[#9acd4a]/40" />
            )}
            <span
              className="vinyl relative block h-full w-full overflow-hidden rounded-full ring-2 ring-[#c9b84a]/50 shadow-xl shadow-black/60"
              style={{ animationPlayState: playing ? "running" : "paused" }}
            >
              <img  src={haroon} alt="" className="h-full w-full object-contain" />
              <span className="absolute inset-0 bg-[#0a1a0e]/35" />
            </span>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-4 items-end gap-[3px]">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="eq-bar w-[3px] rounded-full bg-white"
                    style={{
                      animationDelay: `${i * 0.15}s`,
                      animationPlayState: playing ? "running" : "paused",
                    }}
                  />
                ))}
              </span>
            </span>
          </button>
        ) : (
          /* ---------- Full card ---------- */
                   /* ---------- Full card ---------- */
          <div className="music-pop relative mt-20 h-[250px] w-[min(400px,calc(100vw-3rem))]">
            {/* soft glow behind */}
                        {/* soft glow behind */}
            <div
              className={`pointer-events-none absolute -inset-3 rounded-[36px] blur-xl transition-opacity duration-700 ${
                playing ? "opacity-70" : "opacity-30"
              }`}
              style={{
                background:
                  "radial-gradient(circle at 15% 25%, rgba(201,184,74,0.30), transparent 60%), radial-gradient(circle at 85% 85%, rgba(154,205,74,0.30), transparent 60%)",
              }}
            />

            {/* 1) glass card background (website green theme) */}
            <div
              className="absolute inset-0 z-[1] overflow-hidden rounded-[22px] border border-[#c9b84a]/25 shadow-2xl shadow-black/60 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,70,26,0.92) 0%, rgba(14,38,18,0.95) 50%, rgba(7,18,10,0.98) 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(238,246,220,0.10), 0 25px 50px -12px rgba(0,0,0,0.6)",
              }}
            >
              <span className="pointer-events-none absolute -left-1 -top-5 select-none text-[96px] font-black leading-none tracking-tight text-[#9acd4a]/[0.07]">
                Music
              </span>
            </div>

            {/* 2) photo: clipped ONLY at the bottom, so head pops out of the card */}
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{ clipPath: "inset(-400px 0 0 0 round 0 0 22px 22px)" }}
            >
              <img
                src={haroon}
                alt="Haroon"
                className="absolute -right-5 bottom-0 h-[118%] w-auto max-w-none max-sm:-right-10 max-sm:h-[105%]"
                style={{ filter: "grayscale(1) contrast(1.1) drop-shadow(0 12px 10px rgba(0,0,0,0.55))" }}
              />
            </div>

            {/* minimize */}
            <button
              onClick={() => setMin(true)}
              aria-label="Minimize player"
              className="absolute left-3 top-3 z-[4] rounded-full bg-black/25 p-1.5 text-white/90 backdrop-blur transition hover:bg-black/45"
            >
              <ChevronDown size={16} />
            </button>

            {/* 3) content on the left */}
            <div className="absolute bottom-0 left-0 z-[3] w-[50%] p-5 max-sm:w-[52%] max-sm:p-4">
              <h3 className="truncate text-lg font-bold leading-tight text-white drop-shadow">
                {TRACK.title}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-white/90">
                  {TRACK.artist}
                </span>
                {TRACK.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-white/30 px-1.5 py-px text-[8px] font-medium uppercase tracking-wider text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* controls */}
              <div className="mt-3 flex items-center gap-2.5">
                <button
                  onClick={playing ? pause : play}
                  aria-label={playing ? "Pause music" : "Play music"}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-white/90 text-white transition hover:scale-110 hover:bg-white/10 active:scale-95"
                >
                  {playing ? (
                    <Pause size={14} fill="currentColor" />
                  ) : (
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  )}
                </button>

                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={current}
                  onChange={onSeek}
                  aria-label="Seek"
                  className="music-range min-w-0 flex-1"
                  style={{
                    background: `linear-gradient(to right, #fff ${pct}%, rgba(255,255,255,0.3) ${pct}%)`,
                  }}
                />

                {/* volume with hover slider */}
                <div className="group relative shrink-0">
                  <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 pb-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="w-28 rounded-full bg-black/60 px-3 py-2.5 backdrop-blur">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={muted ? 0 : volume}
                        onChange={onVolume}
                        aria-label="Volume"
                        className="music-range block w-full"
                        style={{
                          background: `linear-gradient(to right, #c9b84a ${volPct}%, rgba(255,255,255,0.25) ${volPct}%)`,
                        }}
                      />
                    </div>
                  </div>
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="text-white/90 transition hover:text-white"
                  >
                    {muted || volume === 0 ? (
                      <VolumeX size={18} />
                    ) : (
                      <Volume2 size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}