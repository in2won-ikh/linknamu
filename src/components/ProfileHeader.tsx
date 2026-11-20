type Props = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function ProfileHeader({ name, bio, imageUrl }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 bg-gray-200 text-3xl font-bold text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={`${name} 프로필 사진`} className="h-full w-full object-cover" />
        ) : (
          <span aria-hidden>{name.charAt(0)}</span>
        )}
      </div>
      <h1 className="mt-6 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </header>
  );
}
