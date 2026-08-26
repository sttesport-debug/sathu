import BlogCard from "@/components/BlogCard";
import Impage from "next/image";


export default function Home() {
  return (
    <div >
      <h2> ยินดีต้อนรับเข้าสู่เว็บไซต์ </h2>
      <p> โดย ปรมะ เกิดผลหลาก </p>

      <BlogCard/>

    </div>
  );
}