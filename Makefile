.PHONY: deploy
deploy:
	@echo "Deploying to AWS..."
	@yarn build
	@aws s3 sync ./public s3://clemenspeters.de --profile private
	@aws cloudfront create-invalidation \
		--profile private \
		--distribution-id E3LJ6EF8H7H5EZ \
		--paths "/*"
	@echo "🚀️ Deployed to AWS ✅️"