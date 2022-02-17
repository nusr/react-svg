const importAll = (requireContext) => requireContext.keys().map(requireContext);

const requireContext = require.context('./icons', false, /\.svg$/);
/**
 * import all svg files
 */
const list = importAll(requireContext);
const symbolIdList = list
  .map((item) => item.default && item.default.id)
  .filter((v) => v);
export default symbolIdList;
