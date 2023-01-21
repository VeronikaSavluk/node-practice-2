import { defineStyleConfig } from "@chakra-ui/react";

export const styles = defineStyleConfig(
  Object.freeze({
    global: {
      body: {
        m: 0,
        fontSize: '14px',
        lineHeight: 'base',
        backgroundColor: '#4d4c4c',
        border: '1px solid',
        borderColor: 'transparent',
        color: '#f1b61f',
      },
      a: {
        color: '#f1b61f',
        textDecoration: 'none',
      },
      ul: {
        listStyle: 'none',
      },
      img: {
        height: 'auto',
      },
      button: {
        borderRadius: '4px',
      },
    },
  })
);