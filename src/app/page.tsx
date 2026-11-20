import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-10 pt-16">
      {/* 다크모드 토글 (PRD 기능) */}
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      {/* 상단: 원형 프로필 사진 + 이름 + 한 줄 소개 */}
      <ProfileHeader name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

      {/* 중간: 링크 카드 세로 배치 */}
      <nav aria-label="링크 목록" className="mt-12 flex flex-col gap-7">
        {profile.links.map((link) => (
          <LinkCard key={link.id} title={link.title} url={link.url} />
        ))}
      </nav>

      {/* 하단: 와이어프레임의 "• • •" 표시 */}
      <footer aria-hidden className="mt-auto pt-16 text-center text-2xl tracking-[0.5em] text-gray-400 dark:text-gray-600">
        •••
      </footer>
    </main>
  );
}
