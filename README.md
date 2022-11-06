# APK Version

This action returns the version name or version code of an APK file.

## Inputs

### `path`

**Required** The path to the APK file.

## Outputs

### `code`
The version code of an APK file.

### `name`

The version name of an APK file.

## Example usage

```yaml
- uses: kairusds/apk-version-action@v1
  id: apk-version
  with:
    path: "path/to/apk/file.apk"

- name: Result
  run: |
    echo "${{ steps.apk-version.outputs.code }}"
    echo "${{ steps.apk-version.outputs.name }}"
```
