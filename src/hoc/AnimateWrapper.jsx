import { AnimatePresence } from "framer-motion";

const AnimateWrapper = (WrappedComponent) => {
  return function EnhancedComponent({ ...props }) {
    return (
      <AnimatePresence>
        <WrappedComponent {...props} />
      </AnimatePresence>
    );
  };
};