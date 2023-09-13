/** @type {import('next').NextConfig} */
const nextConfig = {
      images : { // 외부 이미지 url 로 사용하기 위함
        remotePatterns : [
          {
            protocol : 'https', // http or https
            hostname : 'images.unsplash.com' // 주소
          }
        ]
    }
}

module.exports = nextConfig;
