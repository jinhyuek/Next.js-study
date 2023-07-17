type Props = {
  params: {
    slug: string;
  };
};
export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 제품 설명 페이지</h1>;
}

export function generateStaticParams() {
  //미리 생성 해둠. 빌드시 원하는 동적페이지를 미리 만들어 놓을 수 있도록 설정.
  const products = ["skirt", "pants"];
  return products.map((product) => ({
    slug: product,
  }));
}
