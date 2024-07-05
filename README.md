# Pokemon-Book

프로젝트 기간 : 2024.07.03 - 2024.07.05  
프로젝트 내용 : 1세대 포켓몬들에 대한 정보를 제공

사용 기술 : Next.js,TypeScript,Tailwind css,Tanstack Query

폴더 구조 :

![Folder Structure](/public/pokemon-book.png)

구현 내용

- Metadata 설정 => ref. app/layout.tsx, app/detail/[id]/page.tsx
- 메인 페이지 : 클라이언트 컴포넌트
  - use client 사용 => ref. components/PokemonList.tsx
- 상세 페이지 : 서버 컴포넌트
  - 다이나믹 페이지로 구성 => ref. components/PokemonDetail.tsx
  - 메인 페이지로 돌아가는 로직 작성 => ref. components/PokemonDetail.tsx
  - 메타데이터로 타이틀 동적으로 설정 => ref. app/detail/[id]/page.tsx
- Image 태그, Link 태그 사용 => ref. components/PokemonItem.tsx, components/PokemonDetail.tsx
