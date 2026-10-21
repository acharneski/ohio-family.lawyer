#pnpm run build

aws s3 cp --recursive ./_site/ s3://ohio-family.lawyer/

aws cloudfront create-invalidation \
  --distribution-id EN4QE7DVGB1H5 \
  --paths "/*"
