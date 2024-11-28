import { createClient } from '@sanity/client';

export const client = createClient({
      projectId: '7vtztm7g', // Replace with your Sanity project ID
  dataset: 'production',       // Replace with your dataset name
  useCdn: true,                // Use CDN for faster performance
  apiVersion: '2023-01-01',    // Use the latest API version
});
