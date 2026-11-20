export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
  links: LinkItem[];
};

// TODO: 보여주기용 더미 값입니다. 실제 정보와 링크로 바꿔 주세요.
export const profile: Profile = {
  name: "김클로",
  bio: "세계 최강 바이브 코더",
  imageUrl: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://example.com/" },
  ],
};
