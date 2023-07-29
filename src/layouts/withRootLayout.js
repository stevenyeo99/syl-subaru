import App from "@/app/app";

const withRootLayout = (PageComponent) => {
  const WithLayout = (props) => (
    <App>
      <PageComponent {...props} />
    </App>
  );

  // Set a custom display name for proper React DevTools identification
  const displayName = PageComponent.displayName || PageComponent.name || 'Component';
  WithLayout.displayName = `withRootLayout(${displayName})`;

  return WithLayout;
};

export default withRootLayout;