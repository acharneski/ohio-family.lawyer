#pnpm run build

aws s3 cp --recursive ./dist/ s3://rotor.cognotik.com/

aws cloudfront create-invalidation \
  --distribution-id E1YYW2PT14G4PS \
  --paths "/*"
