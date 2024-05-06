import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  const handleJoinGame = () => {
    const newPlayerId = players.length + 1;
    setPlayers([...players, `Player ${newPlayerId}`]);
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const cardTableSize = useBreakpointValue({ base: "90vw", md: "60vw" });

  return (
    <Flex direction="column" align="center" justify="center" h="100vh" p={4}>
      <Box w={cardTableSize} bg="green.500" p={4} borderRadius="lg" boxShadow="xl">
        <Text fontSize="xl" color="white" textAlign="center">Texas Hold'em Table</Text>
        {gameStarted ? (
          <Flex direction="column" align="center" mt={4}>
            {players.map(player => (
              <Text key={player} color="white">{player} is playing...</Text>
            ))}
          </Flex>
        ) : (
          <Button mt={4} colorScheme="teal" onClick={handleJoinGame} isDisabled={players.length >= 5}>
            Join Game
          </Button>
        )}
      </Box>
      <Button mt={4} colorScheme="orange" onClick={handleStartGame} isDisabled={gameStarted || players.length < 2}>
        Start Game
      </Button>
    </Flex>
  );
};

export default Index;