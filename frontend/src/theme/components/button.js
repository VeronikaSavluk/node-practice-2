import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({

  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },

  sizes: {
    xs: {
      fontSize: '7px',
      px: 1,
      py: '1px',
    },
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 2,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 2,
    },
  },

  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#f1b61f',
      color: '#f1b61f',
      _hover: {
      bg: 'rgba(241, 182, 31, .1)'
      },
      _focus: {
      bg: 'rgba(241, 182, 31, .1)'
      },
    },
    solid: {
      bg: '#f1b61f',
      color: '#4d4c4c',
      _hover: {
      bg: 'rgba(241, 182, 31, .7)'
      },
    _focus: {
      bg: 'rgba(241, 182, 31, .7)'
      },
    },
  },

  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
});