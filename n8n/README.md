# n8n workflows

## `linkedin-comment-from-webhook.json`

Receives a LinkedIn post and some text on a webhook, then posts that text as a comment on the post.

```
Webhook → Config → Parse & Validate → Is valid? ─┬→ Post Comment ─┬→ 201 Commented
                                                 │                └→ 502 LinkedIn error
                                                 └→ 400 Bad request
```

### Import

In n8n, open **Workflows → Import from File** and choose `linkedin-comment-from-webhook.json`.

### Setup

1. **Webhook**: create a *Header Auth* credential (for example header `X-API-Key` with a long random value), so only you can trigger the workflow.
2. **Config**: set `actorUrn` to the account that will post the comment:
   - As yourself: `urn:li:person:<id>`. The `<id>` is the `sub` field returned by `GET https://api.linkedin.com/v2/userinfo`. That call needs the `openid` and `profile` scopes.
   - As a company page you administer: `urn:li:organization:<id>`.
3. **Post Comment**: select a *LinkedIn OAuth2* credential. It needs the `w_member_social` scope, or `w_organization_social` to comment as a page.
4. Activate the workflow.

`linkedinVersion` is LinkedIn's monthly API version (`YYYYMM`). LinkedIn retires old versions after about a year, so update it if you get a "version not active" error.

### Request

```bash
curl -X POST https://<your-n8n>/webhook/linkedin-comment \
  -H 'Content-Type: application/json' \
  -H 'X-API-Key: <your secret>' \
  -d '{"post": "https://www.linkedin.com/posts/someone_topic-activity-7234567890123456789-AbCd", "text": "Great insight, thanks for sharing!"}'
```

`post` accepts a post URL (`/posts/...-activity-<id>-...` or `/feed/update/urn:li:activity:<id>`) or a URN (`urn:li:activity:…`, `urn:li:share:…`, `urn:li:ugcPost:…`). `text` can be up to 1250 characters. `postUrl`/`postUrn` and `comment` also work as field names.

### Responses

| Status | Body |
| --- | --- |
| 201 | `{ "ok": true, "postUrn": "...", "commentUrn": "..." }` |
| 400 | `{ "ok": false, "errors": ["..."] }`: invalid input or `actorUrn` not set |
| 502 | `{ "ok": false, "error": "LinkedIn API request failed", "details": "..." }` |

### Note on LinkedIn permissions

The self-serve LinkedIn apps ("Share on LinkedIn") only allow `w_member_social`. That scope covers commenting on your own posts. Commenting on other people's posts through the API may require LinkedIn's Community Management API, which you have to apply for. If LinkedIn returns 403, that's why.
