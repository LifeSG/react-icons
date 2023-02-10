# Contributing

## Adding new icons

1. Download the icon in **svg** format.
2. Add the icon file in the `assets` folder
3. Run `npm run generate-icons` to generate the corresponding icon component

## Documenting the new icons

1. After the icon component has been generated, head over to `/stories/icon/data.tsx`
2. Import the icon file and add it to the `ICONS` array
