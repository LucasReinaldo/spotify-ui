/* eslint-disable @next/next/no-img-element */
import { randomInt } from 'crypto';
import {
  BellDot,
  ChevronLeft,
  ChevronRight,
  Computer,
  Home as HIcon,
  Library,
  List,
  ListMusic,
  Maximize2,
  Mic2,
  PictureInPicture2,
  Play,
  PlaySquare,
  Plus,
  Repeat,
  Search,
  Shuffle,
  StepBack,
  StepForward,
  Users2,
  Volume2,
} from 'lucide-react';

import {
  PLAYLISTS,
  PLAYED_RECENTLY,
  YOUR_SHOWS,
  RECENTLY_PLAYED,
  NEW_EPISODES,
  SPOTIFY_ORIGINAL_PODCASTS,
} from './_utils';

export default function Home() {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col">
      <div className="flex h-[calc(100vh-80px)] flex-1">
        <aside className="w-80 bg-zinc-950 py-2 pl-2 pr-1">
          <nav className="flex h-full flex-col space-y-2">
            <div className="space-y-5 rounded-md bg-zinc-900 px-4 py-4">
              <a
                className="flex items-center gap-4 rounded-md text-sm font-medium text-zinc-100 hover:text-zinc-100"
                href="#"
              >
                <HIcon size={24} color="#FFF" />
                Home
              </a>
              <a
                className="flex items-center gap-4 rounded-md text-sm font-medium text-zinc-400 hover:text-zinc-100"
                href="#"
              >
                <Search size={24} />
                Search
              </a>
            </div>
            <div className="flex h-full flex-col space-y-5 overflow-y-hidden rounded-md bg-zinc-900 px-4 py-4">
              <div className="flex items-center justify-between rounded-md text-sm font-medium text-zinc-400 hover:text-zinc-100">
                <div className="flex items-center gap-4 text-sm font-medium">
                  <Library size={24} />
                  Your Library
                </div>

                <div>
                  <Plus size={24} />
                </div>
              </div>

              <div className="mb-6 flex flex-row gap-2 overflow-x-auto overflow-y-hidden py-2">
                <button
                  type="button"
                  title="Filter by all categories"
                  className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
                >
                  <span>Playlists</span>
                </button>
                <button
                  type="button"
                  title="Filter by music category"
                  className="inline-flex shrink-0 items-center rounded-full bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
                >
                  <span>Artists</span>
                </button>
                <button
                  type="button"
                  title="Filter by podcasts category"
                  className="inline-flex items-center rounded-full bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
                >
                  <span>Albums</span>
                </button>
                <button
                  type="button"
                  title="Filter by podcasts category"
                  className="inline-flex shrink-0 items-center rounded-full bg-zinc-800 px-3 py-2 text-sm text-zinc-200"
                >
                  <span>Podcasts & Shows</span>
                </button>
              </div>

              <div className="overflow-auto scroll-smooth">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <Search size={16} />
                  </div>

                  <div className="flex items-center gap-1">
                    <p className="text-sm text-zinc-400">Recents</p>
                    <List size={20} strokeWidth={1.5} color="#a1a1aa" />
                  </div>
                </div>

                <div className="space-y-2">
                  {PLAYLISTS.map((playlist) => {
                    return (
                      <div key={randomInt(100)} className="flex gap-2">
                        <img
                          src={playlist.image}
                          alt="Cover of the playlist"
                          className="size-12 rounded-sm"
                        />
                        <div>
                          <p className="text-sm text-zinc-200">
                            {playlist.name}
                          </p>
                          <div className="flex gap-1">
                            <p className="text-xs text-zinc-400">
                              {playlist.type}
                            </p>
                            <span className="text-xs text-zinc-400">-</span>
                            <p className="text-xs text-zinc-400">
                              {playlist.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>
        </aside>

        <main className="flex flex-1 py-2 pl-1 pr-2">
          <div className="flex h-full w-full flex-col overflow-y-auto scroll-smooth rounded-md bg-zinc-900 px-4 py-4">
            <div className="inline-flex items-center justify-between">
              <div className="mb-6 flex gap-4 ">
                <button
                  type="button"
                  title="Go back"
                  className="rounded-full bg-zinc-800 p-1"
                >
                  <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  title="Go forward"
                  className="rounded-full bg-zinc-800 p-1"
                >
                  <ChevronRight size={24} strokeWidth={1.5} />
                </button>
              </div>

              <div className="inline-flex items-center gap-2">
                <span className="rounded-full bg-zinc-800 p-2">
                  <BellDot size={20} strokeWidth={1.5} />
                </span>
                <Users2 size={20} strokeWidth={1.5} />
                <img
                  src="/profile.jpg"
                  alt=""
                  className="size-7 rounded-full border-2 border-zinc-400"
                />
              </div>
            </div>

            <div className="mb-6 flex gap-2">
              <button
                type="button"
                title="Filter by all categories"
                className="rounded-full bg-zinc-200 px-3 py-1 text-sm text-zinc-700"
              >
                All
              </button>
              <button
                type="button"
                title="Filter by music category"
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-200"
              >
                Music
              </button>
              <button
                type="button"
                title="Filter by podcasts category"
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-200"
              >
                Podcasts
              </button>
            </div>

            <div className="mb-10 grid grid-cols-4 gap-2">
              {PLAYED_RECENTLY.filter((p) => p.type === 'Playlist')
                .slice(0, 8)
                .map((playlist) => {
                  return (
                    <a
                      href="#"
                      key={randomInt(200)}
                      className="flex items-center gap-1 overflow-hidden rounded-sm bg-zinc-200/10 transition-colors duration-200 ease-in-out hover:bg-zinc-200/20"
                    >
                      <img src={playlist.image} alt="" className="size-12 " />
                      <div className="p-2">
                        <p className="text-sm font-medium">{playlist.name}</p>
                      </div>
                    </a>
                  );
                })}
            </div>

            <div className="mb-10">
              <div className="mb-4 flex flex-row items-center justify-between">
                <a href="#" className="hover:underline">
                  <h1 className="text-xl font-semibold">Your shows</h1>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-zinc-400 hover:underline"
                >
                  Show all
                </a>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {YOUR_SHOWS.map((show) => {
                  return (
                    <a
                      href="#"
                      key={randomInt(200)}
                      className="flex flex-col justify-between rounded-md p-2 hover:bg-zinc-200/10"
                    >
                      <img
                        src={show.image}
                        alt=""
                        className="h-48 w-52 rounded-md"
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium">{show.name}</p>
                        <p className="text-xs font-medium text-zinc-500">
                          {show.author}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mb-10">
              <div className="mb-4 flex flex-row items-center justify-between">
                <a href="#" className="hover:underline">
                  <h1 className="text-xl font-semibold">Recently played</h1>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-zinc-400 hover:underline"
                >
                  Show all
                </a>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {RECENTLY_PLAYED.map((show) => {
                  return (
                    <a
                      href="#"
                      key={randomInt(200)}
                      className="flex flex-col justify-between rounded-md p-2 hover:bg-zinc-200/10"
                    >
                      <img
                        src={show.image}
                        alt=""
                        className="h-48 w-52 rounded-md"
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium">{show.name}</p>
                        <p className="text-xs font-medium text-zinc-500">
                          {show.author}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mb-10">
              <div className="mb-4 flex flex-row items-center justify-between">
                <a href="#" className="hover:underline">
                  <h1 className="text-xl font-semibold">New episodes</h1>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-zinc-400 hover:underline"
                >
                  Show all
                </a>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {NEW_EPISODES.map((show) => {
                  return (
                    <a
                      href="#"
                      key={randomInt(200)}
                      className="flex flex-col justify-between rounded-md p-2 hover:bg-zinc-200/10"
                    >
                      <img
                        src={show.image}
                        alt=""
                        className="h-48 w-52 rounded-md"
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium">{show.name}</p>
                        <p className="text-xs font-medium text-zinc-500">
                          {show.author}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mb-10">
              <div className="mb-4 flex flex-row items-center justify-between">
                <a href="#" className="hover:underline">
                  <h1 className="text-xl font-semibold">
                    Spotify original podcasts
                  </h1>
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold text-zinc-400 hover:underline"
                >
                  Show all
                </a>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {SPOTIFY_ORIGINAL_PODCASTS.map((show) => {
                  return (
                    <a
                      href="#"
                      key={randomInt(200)}
                      className="flex flex-col justify-between rounded-md p-2 hover:bg-zinc-200/10"
                    >
                      <img
                        src={show.image}
                        alt=""
                        className="h-48 w-52 rounded-md"
                      />
                      <div className="p-2">
                        <p className="text-sm font-medium">{show.name}</p>
                        <p className="text-xs font-medium text-zinc-500">
                          {show.author}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="fixed bottom-0 h-full max-h-[80px] w-full items-center bg-zinc-950 p-4">
        <div className="flex h-full flex-auto flex-row items-center">
          <div className="flex flex-1 flex-row gap-4"></div>

          <div className="flex flex-1 flex-row items-center justify-center">
            <div className="flex flex-1 flex-col items-center justify-center gap-1">
              <div className="flex flex-row items-center justify-center gap-4">
                <Shuffle size={20} strokeWidth={1.5} color="#a1a1aa" />
                <StepBack
                  size={20}
                  strokeWidth={1.5}
                  color="#a1a1aa"
                  fill="#a1a1aa"
                />
                <span className="rounded-full bg-zinc-100 p-2">
                  <Play size={20} strokeWidth={1.5} color="#000" fill="#000" />
                </span>
                <StepForward
                  size={20}
                  strokeWidth={1.5}
                  color="#a1a1aa"
                  fill="#a1a1aa"
                />
                <Repeat size={20} strokeWidth={1.5} color="#a1a1aa" />
              </div>

              <div className="flex flex-1 flex-row gap-1">
                <p className="text-xs text-zinc-500">2:54</p>
                <div className="relative flex w-full flex-1 flex-row items-center">
                  <span className="absolute h-1 w-60 rounded-full bg-zinc-200" />
                  <span className="h-1 w-96 rounded-full bg-zinc-800" />
                </div>
                <p className="text-xs text-zinc-500">4:49</p>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-row justify-end gap-4">
            <PlaySquare size={18} color="#a1a1aa" />
            <Mic2 size={18} color="#a1a1aa" />
            <ListMusic size={18} color="#a1a1aa" />
            <Computer size={18} color="#a1a1aa" />
            <Volume2 size={18} color="#a1a1aa" />
            <PictureInPicture2 size={18} color="#a1a1aa" />
            <Maximize2 size={18} color="#a1a1aa" />
          </div>
        </div>
      </footer>
    </div>
  );
}
